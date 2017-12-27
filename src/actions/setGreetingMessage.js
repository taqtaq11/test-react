export const type = 'SET_GREETING_MESSAGE'

export default function setGreetingMessage(message) {
    return { type, message }
}