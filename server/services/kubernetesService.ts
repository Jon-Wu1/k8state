// Lines 2 - 33 are basic kubernetes API setup
import * as k8s from '@kubernetes/client-node';
import dotenv from 'dotenv';
dotenv.config();

// Creates the config file that the server will be using to communicate with the cluster
const kc = new k8s.KubeConfig();
kc.loadFromOptions({
    clusters: [
      {
        name: 'main-cluster',
        server: `${process.env.KUBERNETES_SERVER}`,
        skipTLSVerify: true,
      },
    ],
    users: [
      {
        name: 'main-user',
        token: `${process.env.KUBERNETES_TOKEN}`,
      },
    ],
    contexts: [
      {
        name: 'main-context',
        cluster: 'main-cluster',
        user: 'main-user',
      },
    ],
    currentContext: 'main-context',
  });

// Creates an instance of a Kubernetes API Client to interact with the Kubernetes API
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

// Defines helper functions that will connect middleware to the Kubernetes API Client functions
const kubernetesService = {

    // Function that gets all pods from the cluster
    getPodsFromCluster: async (): Promise<k8s.V1Pod[]> => {

        try {
            const res = await k8sApi.listPodForAllNamespaces();
            return res.body.items;
        }
        catch (error) {
            console.log(error);
            throw new Error(
                `Error fetching all pod details from the cluster.`
            );
        };
    },

    // Function that gets a specific pod's details from the cluster
    getPodDetailsFromCluster: async (podName: string, namespace: string): Promise<k8s.V1Pod> => {

        try {
            const res = await k8sApi.readNamespacedPod(podName, namespace);
            return res.body;
        }
        catch (error) {
            console.log(error);
            throw new Error(
                `Error fetching pod details from the cluster for pod name: ${podName} in namespace: ${namespace}.`
            );
        }
    },

    // Function that gets all services from the cluster
    getServicesFromCluster: async (): Promise<k8s.V1Service[]> => {

        try {
            const res = await k8sApi.listServiceForAllNamespaces();
            return res.body.items;
        }
        catch (error) {
            console.log(error);
            throw new Error(
                `Error fetching all service data from the cluster.`
            )
        }
    },

    // Function that gets all nodes from the cluster
    getNodesFromCluster: async (): Promise<k8s.V1Node[]> => {

        try {
            const res = await k8sApi.listNode();
            return res.body.items;
        }
        catch (error) {
            console.log(error);
            throw new Error(
                `Error fetching all node data from the cluster.`
            )
        }
    }

};

// Exports service object for use as helper functions
export default kubernetesService;