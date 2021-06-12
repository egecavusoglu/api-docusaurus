---
title: Auth
slug: auth
sidebar_position: 1
---

import Endpoint from "../../src/components/Endpoint"

# Authentication

All authentication related endpoints.

## Profile

<Endpoint method="GET" url="/profile" requiresToken
responseBody={{
    username: "docusaurus_user",
    age: 21
}}>
Get user's profile information
</Endpoint>

## Login

<Endpoint method={"POST"} url={`/login`} requiresToken={false} requestBody={{username: "docusaurus_user", password: "easypass123", lang: "EN"}}>
Logs in user with the given credentials.
</Endpoint>
