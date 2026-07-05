export function getSubject(req, res) {
    const subject = [
        { id: 1, name: 'Alice', date: 20 },
        { id: 2, name: 'Bob', date: 22 },
        { id: 3, name: 'Charlie', date: 21 },
        { id: 4, name: 'David', date: 23 },
        { id: 5, name: 'Alice', date: 20 },
        { id: 6, name: 'Alice', date: 20 },
        
    ];

    const {id, name, date} = req.query;
    // Filter students based on query parameters
    let result = subject;

    if (id) {
        result = result.filter(subject => subject.id === parseInt(id));
    }

    if (name) {
        result = result.filter(subject => subject.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (date) {
        result = result.filter(subject => subject.date === parseInt(date));
    }

    res.json(result);
}