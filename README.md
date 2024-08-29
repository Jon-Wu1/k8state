# K8State: Kubernetes Dashboard

K8State is a comprehensive Kubernetes dashboard application designed to provide real-time insights into your Kubernetes clusters. With K8State, you can monitor, manage, and optimize your Kubernetes resources through a user-friendly interface built on modern web technologies.

## Features

•	Real-Time Monitoring: View the status of pods, nodes, and services in real-time.
•	Resource Visualization: Graphical representation of resource utilization, leveraging Prometheus and Grafana.
•	Interactive UI: Built with React, Redux, React-Flow and Material-UI, offering a responsive and intuitive interface.
•	Scalability: Designed to scale with your Kubernetes clusters, supporting multiple namespaces and contexts.
•	Extensibility: Easily extendable through a modular architecture to accommodate custom metrics and features.

## Prerequisites

•	Node.js (version 14 or higher)
•	npm or Yarn
•	Kubernetes Cluster URL / Bearer Token

## Optional

•	Prometheus instance running in your Kubernetes cluster
•	Grafana instance for visualizations

## Scripts

- `dev` - start dev server on port 3000
- `server` - start backend server on port 8080

## Installation

1. Clone the Repository
```sh
git clone https://github.com/your-username/k8state.git
cd k8state
```

2. Install Dependencies

Using npm:
```sh
npm install
```

Using yarn:

```sh
yarn install
```

## Necessary Information

This application requires the following information to function properly.
• The server address either an IP or a domain name
• A bearer token generated from the kubernetes cluster.

More information about how to generate a bearer token:
https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_token/

## Running the Application

1. Start the Backend

In the root directory:

```sh
cd server
npm run server
```
Starts the server on http://localhost:8080


2. Start the Frontend

In the root directory:

```sh
cd client
npm run build
npm run start
```
Starts the client on http://localhost:3000
