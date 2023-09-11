FROM maven:3.6.0-jdk-13-alpine AS build
WORKDIR /app
COPY src ./src
COPY pom.xml .
RUN mvn -f pom.xml clean package -DskipTests

#
# Package stage
#

FROM openjdk:13-jdk-alpine
COPY --from=build /app/target/proekt-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","proekt-0.0.1-SNAPSHOT.jar"]
