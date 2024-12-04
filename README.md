# Projekt Big Data

## Opis

### Wstęp
    Celem projektu jest zaimplementowanie aplikacji pozwalającej przewidzieć cenę ---[do uzupełnienia]--- na podstawie dostarczanych przez użytkownika cech.

### Zbiór Danych

- Określić

### Technologie
    - React
    - Spark ML
    - Spring Boot
    - Apache Kafka
    - Java
    - Python
    - JavaScript
    - CSS
    - HTML

### Komponenty

1. Frontend - Pojedyncza strona pozwalająca wprowadzić użytkownikowi zestaw cech, które następnie zostaną przesłane do backendu w celu predykcji ceny.
2. Middleware - SpringBootowa aplikacja odbierająca żądania od aplikacji klienckiej i zapisująca otrzymane dane do Apache Kafka. Jednocześnie nasłuchuje na wiadomości 
od serwisu z modelem predykcyjnym, z których wybiera wiadomości i przesyła na frontend
3. Serwis predykcyjny - Zawiera wyuczony model predykcyjny, przewiduje ceny na podstawie cech dostarczonych przez użytkownika. Zapisuje wyniki do kafki.