CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  email VARCHAR(60) NOT NULL,
  password VARCHAR(60) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  created_at DATE NOT NULL
);

CREATE TABLE user_contact (
  id SERIAL PRIMARY KEY, 
  email VARCHAR(60) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,  
  birthday_date DATE,
  user_id uuid NOT NULL,
  avatar VARCHAR(255),
  created_at DATE NOT NULL
);

CREATE TABLE user_bank_card (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  card_number VARCHAR(255),
  user_id uuid NOT NULL,
  created_at DATE NOT NULL
);

CREATE TABLE user_order (
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  card_id SERIAL,
  status VARCHAR(255),
  created_at DATE NOT NULL
);

CREATE TABLE user_order_item (
  id SERIAL PRIMARY KEY,
  order_id uuid,
  crypto_name VARCHAR(255),
  amount NUMERIC
);

CREATE TABLE user_transfert (
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  amount NUMERIC,
  description VARCHAR(255),
  card_id SERIAL,
  status VARCHAR(255),
  created_at DATE NOT NULL
);

CREATE TABLE user_transfert_item (
  id SERIAL PRIMARY KEY,
  transfert_id uuid,
  amount NUMERIC,
  contact_id SERIAL,
  crypto_name BIGINT
);


CREATE TABLE user_transfert_item (
  id SERIAL PRIMARY KEY,
  contact_id VARCHAR(255),
  crypto_name BIGINT
);


ALTER TABLE user_bank_card ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE user_order ADD FOREIGN KEY (card_id) REFERENCES user_bank_card (id);

ALTER TABLE user_transfert ADD FOREIGN KEY (card_id) REFERENCES user_bank_card (id);

ALTER TABLE user_order_item ADD FOREIGN KEY (order_id) REFERENCES user_order (id);

ALTER TABLE user_transfert_item ADD FOREIGN KEY (transfert_id) REFERENCES user_transfert (id);

ALTER TABLE user_contact ADD FOREIGN KEY (user_id) REFERENCES users (id);
