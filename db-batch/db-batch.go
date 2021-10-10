package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	url := "http://todo-yuta-api-svc:3000/reset"
	req, _ := http.NewRequest(http.MethodDelete, url, nil)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(resp.StatusCode)
}
