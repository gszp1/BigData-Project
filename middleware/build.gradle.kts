plugins {
    java
    id("org.springframework.boot") version "3.4.0"
    id("io.spring.dependency-management") version "1.1.6"
}

group = "org"
version = "1.0.0"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    /* lombok */
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")

    /* Kafka */
    implementation("org.springframework.kafka:spring-kafka:3.3.0")
    implementation("org.apache.kafka:kafka-clients:3.9.0")
    testImplementation("org.springframework.kafka:spring-kafka-test")
    implementation("com.fasterxml.jackson.core:jackson-core:2.18.1")

    /* SLF4j and Logback*/
    implementation("org.slf4j:slf4j-api:2.0.15")
    implementation("ch.qos.logback:logback-core:1.5.12")
    implementation("ch.qos.logback:logback-classic:1.5.12")
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.named<org.springframework.boot.gradle.tasks.bundling.BootJar>("bootJar") {
    archiveBaseName.set("middleware")
    archiveVersion.set("1.0.0")
    mainClass.set("org.middleware.MiddlewareApplication")
}
