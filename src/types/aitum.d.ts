export interface AitumResponse<T> {
  status: string;
  data: T;
}

interface PrivateRuleResponse {
  [key: string]: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RuleResponse extends AitumResponse<PrivateRuleResponse> {
  //
}

export interface Rule {
  name: string;
  id: string;
}
