package handlers;

import java.util.HashMap;
import java.util.Map;

import messages.CreateMessage;
import messages.JoinMessage;
import messages.Message;
import messages.WordMessage;

public class HandlerFactory {
    private Map<String, MessageHandler> handlers;
    
    public HandlerFactory() {
        this.handlers = new HashMap<>();
        initialize();
    }
    
    public MessageHandler getHandler(Message message) {
        if (!handlers.containsKey(message.getClass().getSimpleName())) {
            throw new RuntimeException("Handler doesn't exist");
        }
        return handlers.get(message.getClass().getSimpleName());
    }

    private void initialize() {
        handlers.put(CreateMessage.class.getSimpleName(), new CreateMessageHandler());
        handlers.put(JoinMessage.class.getSimpleName(), new JoinMessageHandler());
        handlers.put(WordMessage.class.getSimpleName(), new WordMessageHandler());
    }
}
