INSERT INTO movies (
    movie_name
) VALUES (
    $1
)

returning *;