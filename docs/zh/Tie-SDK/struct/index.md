---
title: 结构体说明
description: 
lang: zh
sidebar: true
---

参考文件 /go-sdk/codec.go

```go
// 请求结构体调用 go-sdk 方法在内部发送请求使用的结构体
type Request struct {
	JsonRPC string          `json:"jsonrpc"`
	ID      uint64          `json:"id"`
	Method  string          `json:"method"`
	Params  json.RawMessage `json:"params"`
}

// 响应结构体
type Response struct {
	ID     uint64          `json:"id"`
	Result json.RawMessage `json:"result"`
	Error  *ErrorObject    `json:"error,omitempty"`
}

// 错误结构体，处理异常调用的异常对象
type ErrorObject struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

// 打印错误内容
func (e *ErrorObject) Error() string {
	data, err := json.Marshal(e)
	if err != nil {
		return fmt.Sprintf("jsonrpc.internal marshal error: %v", err)
	}
	return string(data)
}

```



