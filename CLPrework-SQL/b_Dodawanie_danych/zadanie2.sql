USE preworkSQL;
SELECT teacher_id
FROM teachers
WHERE name = "Kacper Jagodzinski";
INSERT INTO classes(name, main_teacher_id)
VALUES("Coderslab", "7");
