package com.example.messagingstompwebsocket;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.example.messagingstompwebsocket.utilities.DBManager;

@SpringBootApplication
public class MessagingStompWebsocketApplication {

	public static void main(String[] args) {
		SpringApplication.run(MessagingStompWebsocketApplication.class, args);
		DBManager dbm = new DBManager();
	}

}
