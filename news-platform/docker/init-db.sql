-- Create databases for each service
CREATE DATABASE keycloak;
CREATE DATABASE discourse;
CREATE DATABASE strapi;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE keycloak TO newsplatform;
GRANT ALL PRIVILEGES ON DATABASE discourse TO newsplatform;
GRANT ALL PRIVILEGES ON DATABASE strapi TO newsplatform;
