# Projekt Big Data - Predykcja Ceny Samochodów Używanych - CarWorthy

## Opis

### Tytuł 

    Car Worthy - Your Online Used Car Price Predictor

### Wstęp
    Celem projektu jest zaimplementowanie aplikacji pozwalającej przewidzieć cenę
    używanych samochodów na podstawie dostarczanych przez użytkownika cech.

### Zbiór Danych

- Used Cars Price Prediction Dataset: https://www.kaggle.com/datasets/taeefnajib/used-car-price-prediction-dataset

### Cechy zbioru

1. Brand & Model: Identify the brand or company name along with the specific model of each vehicle.
2. Model Year: Discover the manufacturing year of the vehicles, crucial for assessing depreciation and technology advancements.
3. Mileage: Obtain the mileage of each vehicle, a key indicator of wear and tear and potential maintenance requirements.
4. Fuel Type: Learn about the type of fuel the vehicles run on, whether it's gasoline, diesel, electric, or hybrid.
5. Engine Type: Understand the engine specifications, shedding light on performance and efficiency.
6. Transmission: Determine the transmission type, whether automatic, manual, or another variant.
7. Exterior & Interior Colors: Explore the aesthetic aspects of the vehicles, including exterior and interior color options.
8. Accident History: Discover whether a vehicle has a prior history of accidents or damage, crucial for informed decision-making.
9. Clean Title: Evaluate the availability of a clean title, which can impact the vehicle's resale value and legal status.
10. Price: Access the listed prices for each vehicle, aiding in price comparison and budgeting.

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
    - Docker
    - Docker Compose

### Komponenty

1. Frontend - Pojedyncza strona pozwalająca wprowadzić użytkownikowi zestaw cech, które następnie zostaną przesłane do backendu w celu predykcji ceny.
2. Middleware - SpringBootowa aplikacja odbierająca żądania od aplikacji klienckiej i zapisująca otrzymane dane do Apache Kafka. Jednocześnie nasłuchuje na wiadomości 
od serwisu z modelem predykcyjnym, z których wybiera wiadomości i przesyła na frontend
3. Komponent komunikacyjny - Komunikacja pomiędzy Middleware oraz Serwisem predykcyjnym odbywa się za pośrednictwem Apache Kafka zarządzanym przez Apache Zookeeper. 
4. Serwis predykcyjny - Zawiera wyuczony model predykcyjny, przewiduje ceny na podstawie cech dostarczonych przez użytkownika. Zapisuje wyniki do kafki.

### Uruchamianie
    Wszystkie komponenty aplikacji są skonteneryzowane przy użyciu narzędzia Docker
    oraz Docker Compose, co znacznie przyśpiesza proces uruchamiania komponentów,
    eliminuje potrzebę ręcznej konfiguracji, oraz zapewnia, że użytkownik może uruchomić 
    aplikację w dowolnym środowisku, pod warunkiem, że posiada zainstalowane
    narzędzia Docker oraz Docker Compose. Zawartość skryptów uruchomieniowych
    jest podana w ostatniej sekcji tego opisu.

    1. Frontend - Otworzyć katalog frontend i wewnątrz niego uruchomić komendę run.sh
       lub uruchomić ręcznie komendy w terminalu. Wyłączenia kontenera można dokonać
       skryptem clean.sh (Uwaga: skrypt ten usuwa kontener oraz jego obraz!).
    2. Komponent komunikacyjny oraz Middleware - wejść do katalogu projektu i uruchomić skrypt restart.sh,
       lub uruchomić ręcznie komendy w terminalu. Dodatkowo, utworzony został skrypt restart.sh,
       który pozwala wyłączyć, usunąć i na nowo uruchomić kontenery.
    3  Serwis predykcyjny - TODO

### Porty

| Komponent*  | Port hosta* | Port kontenera* |
|------------ |------------ |-----------------|
| Frontend    |    9091     |      9091       |
| Middleware  |    9090     |      9090       |
|   Kafka     |    9093     |      9093       |
|   Kafka*    |    -        |      9092       |
| Zookeeper   |    2181     |      2181       |
| Zookeeper*  |    -        |      2888       |
| Zookeeper*  |    -        |      3888       |
| Zookeeper*  |    -        |      8080       |

#### Wytłumaczenia
    Komponent - nazwa kompoenentu aplikacji
    Port hosta - port na maszynie hosta (maszynie, na której uruchamiane są kontenery),
                 można się połączyć nim z komponentem z poza sieci kontenerowej
    Port kontenera - port wykorzystywany używany wewnątrz kontenera
    Kafka* - port, z którym łączą się pozostałe kontenery
    Zookeeper* - porty wystawiane dla innych kontenerów

### Skrypty

1. run.sh
``` bash
#!/bin/bash

# Builds docker image from local Dockerfile and sets image name to "frontend-image"
docker build -t frontend-image .

# Creates and runs container with name "frontend" from frontend-image 
# in detached mode and container-host port mapping to 9091
docker run --name frontend -d -p 9091:9091 frontend-image
```

2. clean.sh
``` bash
#!/bin/bash

# Stop frontend container
docker stop frontend

# Removes frontend-image image
docker image rm frontend-image

# Removes frontend container
docker rm frontend
```

3. restart.sh (middleware)
``` bash
#!/bin/bash

docker stop middleware

docker rm middleware

docker image rm car-worthy-middleware

docker build -t car-worthy-middleware .

docker run --name middleware -d -p 9090:9090 car-worthy-middleware
```

4. restart.sh (compose)
``` bash
#!/bin/bash

docker compose down

docker image rm bigdata-project-zookeeper
docker image rm bigdata-project-kafka
docker image rm bigdata-project-middleware

docker compose up
```
