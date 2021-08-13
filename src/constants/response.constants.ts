export const responseCode = {
    default: {
        success: 0,
        error: -1
    },
    user: {
        signin: {
            success: 200,
            error: -200
        },
        emailNotExist: -201,
        notmatch: -202,
        inactive: -203,
        notfound: -204,
        emailAlreadyUsed: -205,
        tokenExpire: -206,
        clientExpire: -207,
        passwordReset: {
            success: 210,
            error: -210,
            alreadyUsed: -211
        },
        confrimToken: {
            success: 220,
            error: -220,
            already: -221,
            invalid: -222
        },
        blocked: {
            success: 240,
            error: -240
        },
        follow: {
            success: 250,
            error: -250
        }
    },
    get: {
        success: 300,
        error: -300,
        notfound: -301,
        userNotfound: -302,
        channelNotfound: -303,
        requestInvalid: -304
    },
    save: {
        success: 310,
        error: -310
    },
    updated: {
        success: 320,
        error: -320,
        notAllow: -321,
        badRequest: -322
    },
    deleted: {
        success: 330,
        error: -330
    },
    created: {
        success: 340,
        error: -340,
        duplicate: -341
    },
    broadcast: {
        send: {
            success: 600,
            error: -600
        }
    }
};

