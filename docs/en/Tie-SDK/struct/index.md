---
title: Struct description
description: 
lang: en
sidebar: true
---

Structure Description Reference Document /go-sdk/codec.go

```go
// The request structure calls the go-sdk method to send the structure used by the request internally
type Request struct {
	JsonRPC string          `json:"jsonrpc"`
	ID      uint64          `json:"id"`
	Method  string          `json:"method"`
	Params  json.RawMessage `json:"params"`
}

// response structure
type Response struct {
	ID     uint64          `json:"id"`
	Result json.RawMessage `json:"result"`
	Error  *ErrorObject    `json:"error,omitempty"`
}

// Error structure, exception object for handling exception calls
type ErrorObject struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

// print error
func (e *ErrorObject) Error() string {
	data, err := json.Marshal(e)
	if err != nil {
		return fmt.Sprintf("jsonrpc.internal marshal error: %v", err)
	}
	return string(data)
}

```



