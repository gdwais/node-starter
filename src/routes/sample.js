module.exports = (app) => {

    app.get('/api/v1/samples', (req, res) => {
        let msg = `/api/v1/samples GET`;
        res.status(200);
        global.logMessage(msg);
        res.send(msg)
    });

    app.get('/api/v1/sample/:id', (req, res) => {
        let id = req.params.id;
        let msg = `/api/v1/sample/${id} GET ONE`;
        res.status(200);
        global.logMessage(msg);
        res.send(msg)
    });

    app.post('/api/v1/samples', (req, res) => {
        let msg = `/api/v1/samples POST`;
        res.status(200);
        global.logMessage(msg);
        res.send(msg)
    });

    app.put(`/api/v1/samples/:id`, (req, res) => {
        let id = req.params.id;
        let msg = `/api/v1/samples/${id} PUT`;
        res.status(200);
        global.logMessage(msg);
        res.send(msg)
    });

    app.delete(`/api/v1/samples/:id`, (req, res) => {
        let id = req.params.id;
        let msg = `/api/v1/samples/${id} DELETE`;
        res.status(200);
        global.logMessage(msg);
        res.send(msg)
    });
};