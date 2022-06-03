# Kubernetes

## Master (Controller)

Responsible for scheduling work on a `Node`. A `Node` in this instance is a "worker" unit, or a machine that has `kubelet` running on the worker.

The state of the `Nodes` and `Pods` are stored inside of `etcd`, a key-value store used by the `Controller` or `Master`.

## Pods

- The most basic execution unit of a Kubernetes application. The smallest and simplest unit that can be deployed.
- A single Pod has memory, an IP address, volumes and other resources shared across all - containers that are defined inside of the Pod.
- They can be scaled horizontally by adding Pod replicas.
- Pods are automatically replaced or removed, if they become "sick" (fail a health check).
- Pods within the Node will be allocated a "cluster IP address" by default.
- Containers in a `Pod` can have their own ports.
- Pod containers share the same network namespace and IP
- Pods live or die but never come back to live (not resumed).
- Pods are only accessible from within the cluster by default. Must use port forwarding in order to expose them from outside of the port.

```bash
kubectl run [pod name] --image=[image name]
```

```bash
kubectl run --rm [pod name] --image=[image name]
```

```bash
kubectl create -f file.pod.yml --dry-run --validate=true
```

`--save-config` must be used with `apply` if you wish to use the `apply` again afterwards with the same configuration.

Will automatically delete the `Pod` or Deployment once the process exists in the container or `Pod`.

```bash
kubectl delete pod [pod name]
```

Deployments are automatically created when running a new `Pod`.

```bash
kubectl delete deployment [deployment name]
```

8080 is the externally accessible port.

```bash
kubectl port-forward [name of pod] 8080:80
```

```bash
kubectl get all
```

```bash
kubectl get pods -n all
```

- **Detecting Pod Health**
  - Initial delay seconds
    - The amount of time to wait before performing the first check
  - Delay seconds
    - The time between subsequent checks after the first is made
- **Mounting Volumes**

Applying configuration should consist of running the following command.

```bash
kubectl appy -f configuration.yml --save-config
```

## Deployments

A `Deployment` is a Kubernetes object type that denotes there being one ore more pods being avialable.

## Services

### Service Types

- **ClusterIP**
- **NodePort**

## StatefulSets

Similar functionality to that of `Deployment` objects, but guarantees that each pod is unique in ordering and storage claimed.

## Storage

Various concepts about Kubernetes storage

### Persistent Volumes

Consists of a portion of storage that is retrieved from a defined storage class.

### Persistent Volume Claims

Consists of a claim against a portion of storage from a Persistent Volume.

Defines the type of policy for retaining storage on `Pod` creation or migration.

### Storage Class

- Filesystem
- Block
