export default class UserAction {

    static ACTION_USER_REGISTER_END = "ACTION_USER_REGISTER_END";

    static ACTION_USER_GET_START = "ACTION_USER_GET_START";

    static add(status) {
        return {
            type: UserAction.ACTION_USER_REGISTER_END,
            payload: {
                data:status
            }
        }
    }
    static colorUpdate(index) {
        return {
            type: UserAction.ACTION_USER_GET_START,
            payload: {
                clr:index
            }
        }
    }
}

