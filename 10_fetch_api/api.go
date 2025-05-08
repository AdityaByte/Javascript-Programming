package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func controller(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Write([]byte("Method not found"))
		return
	}
	body := r.Body
	defer body.Close()

	decoder := json.NewDecoder(body)
	var decodedResponse map[string]interface{}
	decoder.Decode(&decodedResponse)

	fmt.Println("Decoded Data:", decodedResponse)
	
	// Since i have to send the response if everything goes correctly 
	w.Header().Set("content-type", "application/json")
	encoder := json.NewEncoder(w)
	response := map[string]string{
		"response": "success",
	}

	if err := encoder.Encode(&response); err != nil {
		fmt.Println("ERROR: Failed to encode the response", err)
	}
}

func main() {
	http.HandleFunc("/goapi", controller)
	log.Println("Server is started at port :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Failed to start server", err)
	}
}
