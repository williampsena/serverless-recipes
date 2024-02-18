# About

![workflow](https://github.com/williampsena/serverless-recipes/actions/workflows/main.yml/badge.svg)

This repository contains an example of building and running Serverless locally with test coverage.

# Run offline mode

```shell
SLS_DEBUG=* serverless offline

# or

SLS_DEBUG=* sls offline
```

# Call local lambda directly from the shell

```shell
sls invoke local -f api
```

# Run tests

```shell
npm test
```

# Run ci (test + linter + checker)

```shell
npm ci
```