# React Validation Template

Build your own React Validation Form

## Description

Sometimes, you need to build the special validator for the paticular purpose. But It's hard to custom the existing libraries in the market. You need to build yourself library, So here is one of the template you able to references.

## Idea

You have the input with the validation rules. And you want to split the validators individually, The Validator wont intersect to each others. 

```ts
export abstract class BaseRule {
  abstract test(params: RuleParam): boolean;
  abstract res(params: RuleParam): RuleResponse;

  message(orgMsg: string, fieldName: string, arg: string): string {
    return orgMsg.replace("{#fieldName}", fieldName).replace("{#arg}", arg);
  }
}
```

The Input should validate itself, and care its own validated status and it's error UI.

```tsx
<LoginForm.Form onSubmit={submit}>
  <LoginForm.Textbox
    type="text"
    label="Username"
    name="username"
    rules={{ required: true, minLength: 5 }}
  />
  <LoginForm.Textbox
    type="text"
    label="Password"
    name="password"
    rules={{ required: true, minLength: 8 }}
  />
</LoginForm.Form>
```

The form status should reflected by the status of controls that registered to it throught the isValid variable from created Form.

```ts
const LoginForm = React.useMemo(
  () => createLoginForm(["username", "password"]),
  []
);
```

## Implementation

### Preposition
These types should uses for the next steps.

```ts
/**
 * Enum for the available rule keys.
 * This provides a centralized definition of all possible validation rule names.
 */
export enum RuleKey {
  required = "required",
  phone = "phone",
}

/**
 * Type representing the name of a validation rule.
 * It's a union of all possible `RuleKey` values.
 */
export type RuleName =
  | RuleKey.required
  | RuleKey.phone;

/**
 * Type for a collection of rules.
 * It's a key-value pair where the key is the rule name and the value is the rule argument.
 *
 * @example
 * const rules: Rules = {
 *   required: true,
 *   minLength: 8,
 * };
 */
export type Rules = {
  [key: string]: any;
};

/**
 * Type for the arguments that can be passed to a rule.
 * It can be a single string or an array of strings.
 */
export type ArgType = string | string[];

/**
 * Interface representing the parameters for a validation rule function.
 * This is the input for a validation function.
 */
export interface RuleParam {
  /** The value to be validated. */
  val: string;
  /** The name of the field being validated. */
  name: string;
  /** The arguments for the validation rule. */
  arg?: ArgType;
}

/**
 * Interface for the response of a validation rule.
 * This is part of the output of a validation function when validation fails.
 */
export interface RuleResponse {
  /** The name of the field that was validated. */
  name: string;
  /** The arguments that were used for the validation rule. */
  arg?: ArgType;
  /** A code representing the validation error. */
  code: string;
  /** The error message for the validation failure. */
  msg: string;
}

/**
 * Type for the result of a validation rule function.
 * This is the output of a validation function.
 */
export type RuleResult = {
  /** Whether the validation was successful. */
  isValid: boolean;
  /** The response of the validation rule, which is null if validation was successful. */
  res: RuleResponse | null;
};
```

### Step 1: Prepare validation validation rules
The validation rule should have 2 key functions: 
  # 1. Test - implement the validate function.
  ```ts
  test({ val }: RuleParam): boolean {
    return !!val && val.length > 0;
  }
  ```
  #### 2. Res: return the response of the validate function.
  ```ts
  res({ name, arg }: RuleParam): RuleResponse {
    // const that = this;
    return {
      name,
      code: ErrorCode.required,
      msg: this.message(
        ErrorMessage.required,
        name,
        Array.isArray(arg) ? arg[0] : arg || ""
      ),
    };
  }
  ```

## License

[MIT](https://choosealicense.com/licenses/mit/)
