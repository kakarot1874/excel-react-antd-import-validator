export type Columns = {
    title: string;
    key: string;
    rules: RuleFns
}

export type RuleFns = RuleFn[]

export type RuleFn = (value: unknown) => boolean

export enum EProgressStep {
    STEP_ONE = 1,
    STEP_TWO = 2,
    STEP_THREE = 3,
    STEP_FOUR = 4,
    STEP_FIVE = 5,
}