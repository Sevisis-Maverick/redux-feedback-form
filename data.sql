-- Database should be prime_feedback
CREATE DATABASE "sevisis_survey";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "sevisis_survey" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comment" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "sevisis_survey" ("feeling", "understanding", "support", "comment") 
VALUES 
('1', '1', '1', 'I understand nothing'),
('5', '5', '5', 'I still understand nothing');
