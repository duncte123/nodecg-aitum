import type { Rule, RuleResponse } from '@nodecg-aitum/types/aitum';
import ky from 'ky';

const aitumApi = ky.create({
  prefixUrl: 'http://localhost:7777',
});

export async function loadRules(): Promise<Rule[]> {
  const rulesResponse = await aitumApi.get('aitum/rules').json<RuleResponse>();
  const rules = rulesResponse.data;
  const parsedRules: Rule[] = [];

  Object.keys(rules).forEach((ruleName: string) => {
    parsedRules.push({
      name: ruleName,
      id: rules[ruleName],
    });
  });

  return parsedRules;
}

export async function triggerRule(ruleId: string): Promise<void> {
  await aitumApi.get(`aitum/rules/${ruleId}`);
}
