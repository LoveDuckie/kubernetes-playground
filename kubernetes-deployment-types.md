# Deployments

This document outlines the various kinds of deployment techniques.

## Deployment Types

There are three main methods of deploying new changes to existing Kubernetes clusters.

### Blue Green Deployments

A method of deployment whereby changes are verified ahead of time, before being approved. The "test version" of the deployment is only accessible by a controlled audience.

Run multiple versions of a Deployment in Production, and then pull a switch to redirect all traffic new Pods with latest container image.

This is more controlled and measured, as with rolling updates traffic will be indiscriminately directed at new Pods, regardless of whether we deem the Pod to be ready or not.

### Rolling Updates

Steady deployment of changes across Pods by gradually removing Pods, and creating new ones with the latest image.

Traffic will get directed to new Pods once they start successfully. This is the default functionality.

Typically requires more memory or resources on the designated Node, because more Pods have to be created than typically allowed within the `Deployment` configuration.

Incrementally creating new Pods with latest version, while removing old ones.

Increase new one, delete old one.

Service handles load balancing traffic to available Pods

New Pods only scheduled on available Nodes.

Recreation of Pods (outright) can result in some down-time which is not ideal.

Incoming traffic will automatically be designated to new Pods that are created.

#### Performing a Rolling Update Deployment

```bash

```

### Canary Deployments

This form of deployment is similar to that of rolling deployments, but instead we only want a small subset of traffic to go towards the latest deployed version. This way we can determine that the Pods are working as intended.

### Rollbacks

A feature for rolling back features if something goes wrong during deployment, or if the latest version of an application is considered to be faulty.

Key feature of Kubernetes is zero-downtime deployment as a default feature.

Capable of rolling back to a specific version in history.

---

`Deployment` is a superset of `ReplicaSet`.

`ReplicaSet` ensures that the number of pods requested, are in existence. They're a declarative way of managing them.

`Deployment` is a delcarative way to manage Pods, but uses ReplicaSets, but provides some additional features for managing deployments to those ReplicaSets.

`--save-config` will store the current properties or starting configuration of the Pod or Deployment.

`--record` records the command in the Deployment revision history.

```bash
#!/bin/bash
kubectl rollout status deployment [deployment name]
```

Get information about a `Deployment`.

`apply` can create or modify, for instance if there is a change in image version.

```bash
kubectl scale deployment [deployment name] --replicas=5
```

```bash
kubectl scale -f file.yml deployment [deployment name] --replicas=5
```

200m for example, is about 20% of the overall CPU capacity.
128Mi is considered to be 128MB

## Deployment Ideas

- Can remove existing Pods, incur some downtime, and create new Pods with the latest container images.
- Start new Pods and delete old Pods. This means running two versions simultaneously.
- Replacing Pods one by one.
- Make use of a Service (with corresponding Endpoint). Configure the Service to point at new Pods once new version is deployed. Delete old Pods.

```yml
replicas: 2 # how many replicas of the template spec do we want to be active in Kubernetes.
minReadySeconds: 1 # number of seconds
progressDeadlineSeconds: 60 # total number of seconds to wait before considering it a stalled deployment.
revisionHistoryLimit: 5 # number of replicasets that can be rolled back
```

```yml
strategy:
    type: RollingUpdate # default, or recreate strategy
    rollingUpdate:
        maxSurge: 1 # max pods that can exceed the replicas count
        maxUnavailable: 1 # max pods that are not operational
```

Check the status of a deployment

```bash
kubectl rollout status -f file.yml
```

```bash
kubectl rollout undo -f file.yml
```

```bash
kubectl rollout undo deployment [deployment name] --to-revision=2
```

```bash
kubectl rollout status
kubectl rollout history
kubectl rollout undo
```
