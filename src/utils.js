function createSession(res, userId) {
    Session
        .createNewSession(res, userId)
        .then(token => {
            console.log(token)
        }).catch(e => {
            res.status(500).json(e)
        })
}

export default { createSession }