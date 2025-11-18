# Case Study — AI/ML Fraud Detection Pipeline

**Role:** Technical Architect (Lead)
**Client:** Deutsche Securities / HCLTech
**Timeline:** Jan 2023 – Mar 2025

## Overview
Built a high-performance fraud detection pipeline combining Java microservices, Kafka streaming, and Python ML serving to deliver sub-200ms scoring and reduce false positives.

## Responsibilities
- Architected an event-driven ingestion pipeline using Kafka for scalable, reliable messaging.
- Designed low-latency scoring service integrating scikit-learn models wrapped with a Spring Boot API.
- Implemented dual deployment modes: serverless Lambda for burst traffic and ECS containers for baseline throughput.
- Integrated observability (Prometheus, Grafana, ELK) and tracing for full-stack telemetry and faster incident response.

## Outcome
- Achieved <200ms scoring latency, reduced false positives by ~15% and operational costs by ~30%.
- Enabled near-real-time model feedback loops for continuous improvement.
