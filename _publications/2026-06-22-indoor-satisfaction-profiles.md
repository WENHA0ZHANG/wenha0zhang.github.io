---
title: "Towards Uncovering Indoor Satisfaction Profiles: LLM Capacity for Structured Extraction from Occupant Feedback"
collection: publications
permalink: /publication/2026-06-22-indoor-satisfaction-profiles
date: 2026-06-22
venue: "ACM BuildSys'26"
citation: "Parkinson, T., Schiavon, S., Zhang, W., & Miller, C. (2026). Towards Uncovering Indoor Satisfaction Profiles: LLM Capacity for Structured Extraction from Occupant Feedback. ACM Sustainability Week 2026 (ACM Sustainability Week Companion '26). doi:10.1145/3765611.3815015"
---

**Abstract:** Local large language models (LLM) offer a scalable, privacy-preserving approach to extracting structured attributes from free text from built environment occupant surveys, but there is little guidance on what model capacity is needed for reliable extraction. We address this gap with a validation study comparing three locally deployed LLM models (3B, 8B, 27B parameters) on structured complaint-style extraction from 6,283 post-occupancy evaluation survey narratives focused on categories of indoor environmental quality. The 3B model produces near-random classifications (κ < 0.15), the 8B model achieves only slight to fair agreement (κ = 0.05--0.33), and the 27B model reaches moderate agreement with human coding (κ = 0.44--0.58). We contextualise this finding within a reproducible pipeline that integrates latent profile analysis of 16 indoor environmental satisfaction items (n = 39,149), identifying eight occupant profiles, with LLM-based extraction of complaint tone, severity, attribution, and work impact. A classification benchmark shows that neither text content nor LLM-extracted features predict profile membership beyond chance, establishing that satisfaction profiles and complaint text capture independent constructs. This work prototypes a framework for the forensic characterization of the diversity of personal subjective experience in indoor built environments.

**Full text available at:** [ACM Digital Library](https://dl.acm.org/doi/10.1145/3765611.3815015)