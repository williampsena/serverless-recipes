# About

This repository contains serverless examples.

- [The hello world 🌎 example](./hello-world/README.md)

Articles related:

- [Building and deploying AWS Lambda with Serverless framework in just a few of minutes](https://willsena.dev/building-and-deploying-aws-lambda-with-serverless-framework-in-just-a-few-of-minutes/)

# Requirements

Install Serverless CLI.

```
npm install -g serverless
```
test
# Template

You can generate project with following command:

```shell
serverless create --template aws-nodejs --path hello-world
```


# Installing typescript support

```shell
npm install -D serverless-plugin-typescript typescript
pnpm install -D serverless-plugin-typescript typescript
```

# References

- [getting started](https://www.serverless.com/framework/docs/getting-started)
- [serverless-plugin-typescript](https://www.serverless.com/plugins/serverless-plugin-typescript)