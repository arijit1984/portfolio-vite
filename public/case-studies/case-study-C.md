# Case Study C — AI/ML Fraud Detection Pipeline (Deutsche Securities / HCLTech)

**Role:** Technical Architect (Lead)  
**Timeline:** Jan 2023 – Mar 2025  
**Technologies:** Java, Spring Boot, Kafka, Python (scikit-learn), AWS (Lambda, ECS), PostgreSQL, Redis

## Challenge
High false-positive rate and slow scoring times in legacy fraud detection systems caused customer friction and expensive manual reviews.

## Solution
- Designed an event-driven fraud scoring pipeline using Kafka for ingestion and Spring Boot microservices for orchestration.
- Implemented low-latency ML scoring service in Python (scikit-learn) with model-serving wrapped by a Spring Boot API.
- Deployed scoring as a serverless Lambda for burst traffic and as containerized service on ECS for baseline throughput.
- Added observability (Prometheus, Grafana, ELK) and tracing to reduce MTTR and improve model feedback loops.

## Results
- Achieved sub-200ms scoring latency in critical paths.
- Reduced false positives by ~15% and operational costs by ~30% through optimized serving and infra changes.
- Improved scalability by 45% and enabled near real-time feedback for model retraining.
