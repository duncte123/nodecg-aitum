<template>
  <v-app>
    <div>
      <v-btn outlined icon x-small @click="refreshRules">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </div>
    <div>
      <ul>
        <li v-for="rule in rules" :key="rule.id">
          <v-btn @click="triggerRule(rule.id)">
            {{ rule.name }}
          </v-btn>
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { loadRules, triggerRule } from '@nodecg-aitum/extension/util/aitum';
import { Rule } from '@nodecg-aitum/types';

@Component
export default class extends Vue {
  rules: Rule[] = [];

  created(): void {
    console.log('Created');

    this.refreshRules();
  }

  refreshRules(): void {
    loadRules().then((rules) => {
      this.rules = rules;
    });
  }

  triggerRule(ruleId: string): void {
    triggerRule(ruleId);
  }
}
</script>
