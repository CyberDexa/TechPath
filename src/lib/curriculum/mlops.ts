import { Track } from "./types";

export const mlopsTrack: Track = {
  id: "mlops",
  title: "MLOps",
  description:
    "Bridge machine learning and operations — deploy, monitor, and maintain ML systems in production.",
  icon: "Brain",
  color: "purple",
  category: "infrastructure",
  modules: [
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      description:
        "Understand what ML is, the different types, and build your first model with Python.",
      icon: "Sparkles",
      trackId: "mlops",
      order: 11,
      lessons: [
        {
          id: "what-is-ml",
          title: "What is Machine Learning",
          description:
            "ML explained for complete beginners — how machines learn from data.",
          duration: "25 min",
          videoId: "ukzFI9rgwfU",
          videoTitle: "Machine Learning Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "types-of-ml",
          title: "Types of ML (Supervised, Unsupervised)",
          description:
            "Classification, regression, clustering — understand the main categories of ML.",
          duration: "30 min",
          videoId: "1vsmaEfbnoE",
          videoTitle: "Types of Machine Learning",
          videoChannel: "StatQuest",
          hasTerminal: false,
        },
        {
          id: "ml-math-stats",
          title: "Basic Math & Stats Needed",
          description:
            "The essential math for ML — mean, variance, probability, and linear algebra basics.",
          duration: "35 min",
          videoId: "0oCB5_wCMdA",
          videoTitle: "Math for Machine Learning",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Math with Python (numpy):\nimport numpy as np\n\ndata = [85, 90, 78, 92, 88]\nprint(f'Mean: {np.mean(data)}')\nprint(f'Std Dev: {np.std(data)}')\nprint(f'Variance: {np.var(data)}')",
            validation: "python3",
          },
        },
        {
          id: "python-for-ml",
          title: "Python for ML (NumPy, Pandas)",
          description:
            "Work with data using NumPy arrays and Pandas DataFrames — the building blocks of ML.",
          duration: "40 min",
          videoId: "vmEHCJofslg",
          videoTitle: "Pandas & NumPy Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Pandas basics:\nimport pandas as pd\n\ndf = pd.DataFrame({\n  'name': ['Alice', 'Bob', 'Charlie'],\n  'score': [85, 92, 78],\n  'passed': [True, True, False]\n})\nprint(df)\nprint(df.describe())",
            validation: "python3",
          },
        },
        {
          id: "sklearn-intro",
          title: "Scikit-learn Introduction",
          description:
            "Build and evaluate your first ML model with scikit-learn.",
          duration: "35 min",
          videoId: "0B5eIE_1vpU",
          videoTitle: "Scikit-learn Crash Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "First ML model:\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target)\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\nprint(f'Accuracy: {model.score(X_test, y_test):.2%}')",
            validation: "python3",
          },
        },
      ],
      project: {
        title: "Customer Churn Predictor",
        description:
          "Build and train a classification model that predicts whether a customer will leave a service, including data preprocessing, feature engineering, model training, and evaluation metrics.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Data preprocessing",
          "Model evaluation",
        ],
      },
    },
    {
      id: "data-engineering",
      title: "Data Engineering Basics",
      description:
        "Build data pipelines that collect, transform, and store data for ML models.",
      icon: "Database",
      trackId: "mlops",
      order: 12,
      lessons: [
        {
          id: "data-pipelines",
          title: "Data Pipelines Explained",
          description:
            "What are data pipelines, ETL vs ELT, and why they matter for ML.",
          duration: "25 min",
          videoId: "VtzvF17ysbc",
          videoTitle: "Data Pipelines Explained",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "data-lakes-warehouses",
          title: "Data Lakes vs Warehouses",
          description:
            "Understand when to use a data lake, data warehouse, or data lakehouse.",
          duration: "20 min",
          videoId: "4DhTTA484Kk",
          videoTitle: "Data Lake vs Data Warehouse",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "etl-processes",
          title: "ETL Processes",
          description: "Build Extract-Transform-Load pipelines with Python.",
          duration: "35 min",
          videoId: "eJW87LaVZhA",
          videoTitle: "ETL Pipeline Tutorial in Python",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Build a simple ETL:\nimport json, csv\n\n# Extract\nwith open('data.json') as f:\n    data = json.load(f)\n\n# Transform\nclean = [{'name': d['name'].title(), 'score': d['score']} for d in data]\n\n# Load\nwith open('output.csv', 'w') as f:\n    writer = csv.DictWriter(f, fieldnames=['name', 'score'])\n    writer.writeheader()\n    writer.writerows(clean)",
            validation: "python3",
          },
        },
        {
          id: "airflow-basics",
          title: "Apache Airflow Basics",
          description:
            "Orchestrate data pipelines with Apache Airflow — DAGs, operators, and scheduling.",
          duration: "35 min",
          videoId: "K9AnJ9_ZAXE",
          videoTitle: "Apache Airflow Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "data-quality",
          title: "Data Quality and Validation",
          description:
            "Ensure your data is clean, consistent, and reliable for ML training.",
          duration: "25 min",
          videoId: "5FnC_97S1_U",
          videoTitle: "Data Quality in ML Pipelines",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Data validation:\nimport pandas as pd\n\ndf = pd.read_csv('data.csv')\nprint('Missing values:', df.isnull().sum())\nprint('Duplicates:', df.duplicated().sum())\nprint('Data types:', df.dtypes)\nassert df['score'].between(0, 100).all(), 'Invalid scores!'",
            validation: "python3",
          },
        },
      ],
      project: {
        title: "Automated Data Pipeline",
        description:
          "Create a Python-based data pipeline that extracts data from an API, transforms it (cleaning, aggregation, feature engineering), and loads it into a structured format ready for ML.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "Python",
          "ETL",
          "Data cleaning",
          "API integration",
          "Data validation",
        ],
      },
    },
    {
      id: "ml-model-development",
      title: "ML Model Development",
      description:
        "Train, evaluate, version, and track ML experiments professionally.",
      icon: "FlaskConical",
      trackId: "mlops",
      order: 13,
      lessons: [
        {
          id: "model-training",
          title: "Model Training Best Practices",
          description:
            "Cross-validation, train/test splits, preventing overfitting, and training pipelines.",
          duration: "30 min",
          videoId: "iGklzHNBJGk",
          videoTitle: "ML Model Training Best Practices",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Training with cross-validation:\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_wine\n\ndata = load_wine()\nmodel = RandomForestClassifier()\nscores = cross_val_score(model, data.data, data.target, cv=5)\nprint(f'CV Accuracy: {scores.mean():.2%} ± {scores.std():.2%}')",
            validation: "python3",
          },
        },
        {
          id: "model-evaluation",
          title: "Model Evaluation Metrics",
          description:
            "Accuracy, precision, recall, F1-score, ROC/AUC — when to use which metric.",
          duration: "30 min",
          videoId: "LbX4X71-TFI",
          videoTitle: "ML Evaluation Metrics",
          videoChannel: "StatQuest",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Evaluation metrics:\nfrom sklearn.metrics import classification_report\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\ndata = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(data.data, data.target)\nmodel = RandomForestClassifier().fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(classification_report(y_test, y_pred, target_names=data.target_names))",
            validation: "python3",
          },
        },
        {
          id: "hyperparameter-tuning",
          title: "Hyperparameter Tuning",
          description:
            "Grid search, random search, and Bayesian optimization for finding best model parameters.",
          duration: "25 min",
          videoId: "5nYqK-HaoKY",
          videoTitle: "Hyperparameter Tuning Explained",
          videoChannel: "StatQuest",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Grid search:\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nparams = {'n_estimators': [10, 50, 100], 'max_depth': [3, 5, None]}\ngrid = GridSearchCV(RandomForestClassifier(), params, cv=3)\ngrid.fit(*load_iris(return_X_y=True))\nprint(f'Best: {grid.best_params_}\\nScore: {grid.best_score_:.2%}')",
            validation: "python3",
          },
        },
        {
          id: "model-versioning",
          title: "Model Versioning",
          description:
            "Version your models and data with DVC and Git for reproducibility.",
          duration: "25 min",
          videoId: "UdOLBSAhFBo",
          videoTitle: "DVC Tutorial - Data Version Control",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Model versioning basics:\n1. `pip install dvc`\n2. `dvc init`\n3. `dvc add model.pkl` — track model file\n4. `git add model.pkl.dvc .gitignore`\n5. `git commit -m 'Track model v1'`",
            validation: "dvc",
          },
        },
        {
          id: "mlflow-tracking",
          title: "Experiment Tracking with MLflow",
          description:
            "Log parameters, metrics, and artifacts with MLflow for experiment management.",
          duration: "35 min",
          videoId: "a4S5SiGLxGI",
          videoTitle: "MLflow Tutorial",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "MLflow experiment tracking:\nimport mlflow\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\ndata = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(data.data, data.target)\n\nwith mlflow.start_run():\n    model = RandomForestClassifier(n_estimators=100)\n    model.fit(X_train, y_train)\n    acc = model.score(X_test, y_test)\n    mlflow.log_param('n_estimators', 100)\n    mlflow.log_metric('accuracy', acc)\n    print(f'Accuracy: {acc:.2%}')",
            validation: "python3",
          },
        },
      ],
      project: {
        title: "Experiment Tracking Pipeline",
        description:
          "Train multiple model versions using different algorithms and hyperparameters, track all experiments in MLflow, compare results, and select the best model.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "MLflow",
          "Model training",
          "Hyperparameter tuning",
          "Experiment tracking",
        ],
      },
    },
    {
      id: "mlops-principles",
      title: "MLOps Principles",
      description:
        "Apply DevOps practices to ML — CI/CD for models, serving, and Kubeflow.",
      icon: "Cog",
      trackId: "mlops",
      order: 14,
      lessons: [
        {
          id: "cicd-for-ml",
          title: "CI/CD for ML Pipelines",
          description:
            "Adapt CI/CD practices for machine learning — automated training, testing, and deployment.",
          duration: "30 min",
          videoId: "9BgIDqAzfuA",
          videoTitle: "MLOps CI/CD Pipeline",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "model-packaging",
          title: "Model Packaging and Containerization",
          description:
            "Package ML models in Docker containers for consistent deployment.",
          duration: "30 min",
          videoId: "D6W4SjDjyAM",
          videoTitle: "Dockerize ML Models",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Dockerfile for an ML model:\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY model.pkl app.py .\nCMD [\"python\", \"app.py\"]",
            validation: "docker build",
          },
        },
        {
          id: "model-serving",
          title: "Model Serving (Flask, FastAPI)",
          description:
            "Serve ML models as REST APIs with Flask and FastAPI.",
          duration: "35 min",
          videoId: "h5wLuVDr0oc",
          videoTitle: "Deploy ML Model with FastAPI",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Serve model with FastAPI:\nfrom fastapi import FastAPI\nimport pickle\n\napp = FastAPI()\nmodel = pickle.load(open('model.pkl', 'rb'))\n\n@app.post('/predict')\ndef predict(features: list[float]):\n    prediction = model.predict([features])\n    return {'prediction': prediction.tolist()}",
            validation: "python3",
          },
        },
        {
          id: "kubeflow-intro",
          title: "Kubeflow Introduction",
          description:
            "Orchestrate ML workflows at scale with Kubeflow on Kubernetes.",
          duration: "25 min",
          videoId: "dOkOoEqrFiQ",
          videoTitle: "Kubeflow Tutorial",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "feature-stores",
          title: "Feature Stores Concept",
          description:
            "Centralized feature management for ML — what, why, and popular tools.",
          duration: "20 min",
          videoId: "DESBDfhBRsE",
          videoTitle: "Feature Store Explained",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
      ],
      project: {
        title: "ML Model API with CI/CD",
        description:
          "Deploy a trained ML model as a REST API using FastAPI, containerize it with Docker, add automated tests, and set up a CI/CD pipeline for model updates.",
        difficulty: "advanced",
        estimatedHours: 7,
        skills: [
          "FastAPI",
          "Docker",
          "CI/CD",
          "Model serving",
          "Testing",
        ],
      },
    },
    {
      id: "production-ml",
      title: "Production ML Systems",
      description:
        "Monitor, maintain, and scale ML systems in production — the final frontier.",
      icon: "Rocket",
      trackId: "mlops",
      order: 15,
      lessons: [
        {
          id: "model-monitoring",
          title: "Model Monitoring in Production",
          description:
            "Track model performance, detect degradation, and set up alerts.",
          duration: "30 min",
          videoId: "8LywH1_a6XY",
          videoTitle: "ML Model Monitoring",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "data-drift",
          title: "Data Drift Detection",
          description:
            "Detect when your input data distribution changes and your model needs retraining.",
          duration: "25 min",
          videoId: "0dycEhJjNnI",
          videoTitle: "Data Drift Detection in ML",
          videoChannel: "DataTalksClub",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Detect data drift:\nfrom scipy import stats\nimport numpy as np\n\ntrain_data = np.random.normal(0, 1, 1000)\nnew_data = np.random.normal(0.5, 1.2, 1000)  # Drifted!\n\nstat, p_value = stats.ks_2samp(train_data, new_data)\nprint(f'KS Statistic: {stat:.4f}')\nprint(f'P-value: {p_value:.4f}')\nprint('DRIFT DETECTED!' if p_value < 0.05 else 'No drift')",
            validation: "python3",
          },
        },
        {
          id: "model-retraining",
          title: "Model Retraining Strategies",
          description:
            "When and how to retrain models — scheduled, triggered, and online learning.",
          duration: "25 min",
          videoId: "nT-sTlFqFDQ",
          videoTitle: "Model Retraining Strategies",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "ab-testing-models",
          title: "A/B Testing for Models",
          description:
            "Compare model versions in production with A/B testing and shadow deployments.",
          duration: "20 min",
          videoId: "DUNzT5YGTI8",
          videoTitle: "A/B Testing ML Models",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
        {
          id: "ml-system-design",
          title: "ML System Design Patterns",
          description:
            "Common patterns for building production ML systems — batch vs real-time, microservices, etc.",
          duration: "30 min",
          videoId: "pYVScuY-GPk",
          videoTitle: "ML System Design",
          videoChannel: "DataTalksClub",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Complete ML System",
        description:
          "Build a full production ML system with model serving, monitoring dashboards, data drift detection, automated retraining triggers, and A/B testing between model versions.",
        difficulty: "advanced",
        estimatedHours: 8,
        skills: [
          "Model monitoring",
          "Drift detection",
          "A/B testing",
          "System design",
          "Production ML",
        ],
      },
    },
  ],
};
