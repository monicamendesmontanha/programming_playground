CREATE TABLE butterflies(
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- AUTOINCREMENT don't need insert the id more!
  name TEXT,
  family TEXT,
  image TEXT -- URL for a photo of a butterfly
);

-- seed
INSERT INTO butterflies(name, family) VALUES ("Monarch", "Nymphalidae");

