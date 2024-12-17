FROM ubuntu:24.04

RUN mkdir -p /app && \
    mkdir -p /var/logs/CarWorthy-middleware

RUN chmod 755 /var/logs/CarWorthy-middleware

WORKDIR /app

RUN apt-get update && \
    apt-get install -y wget unzip openjdk-21-jdk && \
    rm -rf /var/lib/apt/lists/*

RUN wget https://services.gradle.org/distributions/gradle-8.10-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-8.10-bin.zip && \
    ln -s /opt/gradle/gradle-8.10/bin/gradle /usr/bin/gradle

COPY . .

RUN gradle build --no-daemon

EXPOSE 9090

ENTRYPOINT ["java", "-jar", "/app/build/libs/middleware-1.0.0.jar"]