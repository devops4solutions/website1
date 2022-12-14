---
title: "Logging, Monitoring & Alerting with AWS cloud"
date: "2018-09-07"
categories: 
  - "devops-tools"
---

## Logging, Monitoring & Alerting with AWS cloud

 

“Things get done only if the data we gather can inform and inspire those in a position to make difference”

\-- Mike Schmoker

With the availability of a pool of AWS resources and services, standardized and well-comprehend guidelines; every resource in your AWS environment is spawning a large amount of raw log data. Whether generated by AWS services (including security logs, audit logs for access, configuration change & management and billing events), client-side applications, web servers, operating system, database engine, VPC flow logs, all together forms a crest of indispensable data in different formats and distributed in a chaotic fashion.

Thus, the major challenge is to remold this vital data into a functional form, using a consolidated approach to manage and analyze the different log types, helps bringing harmony back from chaos.

XYZ solutions discerns the importance of capturing and extricating meaningful information from raw log files, and thereby offers the implementation of cost-efficient and scalable _centralized logging solution_ of AWS across multiple accounts and regions, which amalgamates beautifully with _Kibana_ and _Kinesis Firehose_ to provide log management, near real-time visualizing and alerting. This solution ingests different log types including AWS CloudTrail and VPC flow logs to get store and monitor into Amazon CLoudWatch which is then streamed towards Amazon Elasticsearch Service of the primary account. _Kinesis Firehose_ service of Amazon is utilized to stream near real-time data from the web servers/user faced applications to Elasticsearch services. Synergies with _Kibana,_ provides interactive visualization and real-time analysis of your data in a format of your preference.

![](https://cdn-images-1.medium.com/max/1000/1*2G2uvdEpvmwq_S6oIgILUw.png)

References:

- [https://aws.amazon.com](https://aws.amazon.com)
- [http://d0.awsstatic.com](http://d0.awsstatic.com)
- [https://www.cloudreach.com](https://www.cloudreach.com)
- [http://capitalone.github.io](http://capitalone.github.io)
- [https://dzone.com](https://dzone.com)
