# Projekt Big Data

## Opis

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

### Komponenty

1. Frontend - Pojedyncza strona pozwalająca wprowadzić użytkownikowi zestaw cech, które następnie zostaną przesłane do backendu w celu predykcji ceny.
2. Middleware - SpringBootowa aplikacja odbierająca żądania od aplikacji klienckiej i zapisująca otrzymane dane do Apache Kafka. Jednocześnie nasłuchuje na wiadomości 
od serwisu z modelem predykcyjnym, z których wybiera wiadomości i przesyła na frontend
3. Serwis predykcyjny - Zawiera wyuczony model predykcyjny, przewiduje ceny na podstawie cech dostarczonych przez użytkownika. Zapisuje wyniki do kafki.
