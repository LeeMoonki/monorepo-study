# 설정 방법
1. next 프로젝트 생성(`npx create-next-app --example with-jest {project name}`)
2. `package.json`을 다음과 같이 설정
```json
{
  ...
  "name": "client",
  "version": "1.0.0",
  ...
}
```
3. [typescript 설정](https://nextjs.org/docs/basic-features/typescript)
  - 빈 `tsconfig.json` 추가
  - `yarn dev` 실행 후 가이드를 따라 필요 패키지 설치
  - 주의 사항
    - A file named next-env.d.ts will be created in the root of your project. This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it or edit it as it can change at any time.
    - TypeScript strict mode is turned off by default. When you feel comfortable with TypeScript, it's recommended to turn it on in your tsconfig.json.
    - Instead of editing next-env.d.ts, you can include additional types by adding a new file e.g. additional.d.ts and then referencing it in the include array in your tsconfig.json.
  - 공용 tsconfig를 사용하도록 설정

# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules, and TypeScript!

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
# or
yarn create next-app --example with-jest with-jest-app
```

## Run Jest Tests

```bash
npm test
```
