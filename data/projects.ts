export interface Project {
  title: string;
  description: string;
  tech: string[];
  year: number;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Diabetes Risk Prediction",
    description:
      "Supervised classification comparing Logistic Regression, Decision Trees, and KNN to predict diabetes risk from lifestyle and biometric factors. Evaluated with accuracy and F1-score.",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    year: 2025,
    href: "https://github.com/kavehjalilian",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=680&h=320&fit=crop&q=80&auto=format",
  },
  {
    title: "Skandia Demand Forecasting (Capstone)",
    description:
      "Led demand forecasting for a grain equipment manufacturer. Applied Holt-Winters exponential smoothing to 12 years of order data to predict product category demand for inventory planning.",
    tech: ["Python", "Statsmodels", "Pandas", "Matplotlib"],
    year: 2025,
    href: "https://github.com/kavehjalilian",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=680&h=320&fit=crop&q=80&auto=format",
  },
  {
    title: "PGA Golf Top-10 Prediction",
    description:
      "Predicted top-10 PGA finishers after round 2 using feature engineering from shot-level data and Random Forest classification evaluated across held-out tournaments.",
    tech: ["Python", "PySpark", "Spark MLlib"],
    year: 2020,
    href: "https://github.com/kavehjalilian",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=680&h=320&fit=crop&q=80&auto=format",
  },
  {
    title: "MISO Survey Data Storytelling",
    description:
      "Analyzed faculty IT service perception data from 2018–2024 to identify service gaps. Delivered executive-level insights to university leadership via visualizations and narrative summary.",
    tech: ["Python", "matplotlib", "seaborn", "Excel"],
    year: 2024,
    href: "https://github.com/kavehjalilian",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=680&h=320&fit=crop&q=80&auto=format",
  },
  {
    title: "IMDb Top 500 Data Enrichment",
    description:
      "End-to-end data wrangling for a streaming client: scraped IMDb top-voted films (2018–2020), cleaned and transformed records, and enriched internal catalogs.",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    year: 2020,
    href: "https://github.com/kavehjalilian",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=680&h=320&fit=crop&q=80&auto=format",
  },
];
