package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	// set up CORS
	config := cors.DefaultConfig()
	frontendOrigin := os.Getenv("FRONTEND")
	config.AllowOrigins = []string{frontendOrigin}
	r.Use(cors.New(config))

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	r.GET("/counter", func(c *gin.Context) {
		// get counter from db

		hostname, err := os.Hostname()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}
		counter := 0
		resp := gin.H{
			"data":     counter,
			"hostname": hostname,
			"status":   "success",
		}
		c.JSON(http.StatusOK, resp)
	})

	r.POST("/counter", func(c *gin.Context) {
		// + 1 counter in db

		hostname, err := os.Hostname()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}
		counter := 0
		resp := gin.H{
			"data":     counter,
			"hostname": hostname,
			"status":   "success",
		}
		c.JSON(http.StatusOK, resp)
	})

	return r
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	r := setupRouter()
	port := os.Getenv("PORT")
	fmt.Printf("Server listening on port %s...\n", port)
	r.Run(port)
}
