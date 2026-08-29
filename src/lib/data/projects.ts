export type Project = {
	kicker: string;
	title: string;
	body: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		kicker: 'Go · Consistent hashing · Concurrency',
		title: 'DistriCache',
		body: 'A distributed in-memory cache in Go. Consistent hashing with virtual nodes keeps key remapping under 10% on scaling events, against 90%+ for naive modulo sharding. Per-shard RWMutex locking, TTL eviction, replica fallback across ring neighbours.'
	},
	{
		kicker: 'Spring Boot · Kafka · Redis · Kubernetes',
		title: 'Event-Driven Ticket Marketplace',
		body: 'Five microservices under a choreography-based Saga on Kafka — eventual consistency without 2PC. Redis Lua seat locking holds idempotent booking past 1k concurrent requests; CQRS projections land in Elasticsearch. Resilience4j, Helm, Eureka, Zipkin, Prometheus.'
	},
	{
		kicker: 'Next.js · BullMQ · Redis · WebSockets',
		title: 'AI Assessment Creator',
		body: 'Teachers generate structured question papers with AI — async job queues and live WebSocket updates cut manual prep by 95%. OpenRouter as a vendor-agnostic LLM gateway with model fallback; Redis caching took 60% off database load.',
		repo: 'https://github.com/souparno-nag/AI_Assessment_Creator'
	},
	{
		kicker: 'LangChain · LangGraph · Gemini 2.5 Flash',
		title: 'Legal AI Assistant',
		body: 'RAG over legal documents with persistent conversation state. Multi-level summarization through LangGraph state management gives expert, moderate and beginner readings of the same contract; token-aware PDF handling for long documents.',
		repo: 'https://github.com/souparno-nag/GoogleAI_Legalbot'
	},
	{
		kicker: 'Kafka · Spark · Snowflake · Airflow',
		title: 'Unified Data Platform',
		body: 'Lambda architecture from transaction to analytics: Debezium CDC into Kafka for sub-second availability, Kafka Streams enrichment into Snowflake, a partitioned Parquet lake on HDFS with nightly Spark aggregations, all orchestrated by Airflow.'
	},
	{
		kicker: 'LangGraph · Streamlit · OpenAI / Claude',
		title: 'RiskPilot',
		body: 'A multi-agent risk desk. LangGraph orchestrates retrieval, historical VaR and rolling volatility, z-score and isolation-forest anomaly detection, then a commentary agent writes the desk-style report. Live dashboard over the whole pipeline.'
	},
	{
		kicker: 'AWS Lambda · DynamoDB · SQS · Cognito',
		title: 'Serverless E-Commerce Platform',
		body: 'Event-driven storefront across ten-plus AWS services, inside the free tier. API Gateway and Lambda for logic, DynamoDB for storage, Cognito and JWT for access, SQS-backed async order processing, SES notifications, CloudWatch throughout.'
	},
	{
		kicker: 'XGBoost · SHAP · PostgreSQL',
		title: 'CreditPulse',
		body: 'Credit default prediction across 150K+ loan records, with SQL feature engineering in Postgres and SHAP explainability turning model output into something a risk committee can read. Adds a duration and convexity module for ±100bps rate shocks.'
	},
	{
		kicker: 'Node.js · Express · MongoDB · Rasa',
		title: 'VonageConnect',
		body: 'A webhook system carrying SMS and WhatsApp through the Vonage Messages API, with UUID message tracking, dual authentication modes and real-time status across channels. A separate Rasa component handles NLU-driven conversation.',
		repo: 'https://github.com/souparno-nag/multi-channel-customer-service-bot'
	}
];
