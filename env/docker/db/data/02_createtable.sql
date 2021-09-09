\c ytodo;

CREATE TABLE ytodo.task (
    id SERIAL,
    title TEXT NOT NULL,
    task_descrption TEXT,
    created_at TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);