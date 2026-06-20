# CPMX - Charging Point Management System

> A sleek, AI-assisted development workflow for Europe's truck charging infrastructure.

## 🚀 Quick Start

**First time here?** Read this in order:

1. **[SETUP_INDEX.md](./SETUP_INDEX.md)** - Overview of all documentation (START HERE!)
2. **[QUICK_START.md](./QUICK_START.md)** - 5-minute developer setup guide
3. **[WORKFLOW_PLAN.md](./WORKFLOW_PLAN.md)** - Complete workflow documentation
4. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical deep-dive

## 📋 What's Included

- ✅ **CI/CD Pipelines** - GitHub Actions workflows for automated testing & deployment
- ✅ **Deployment Automation** - Dev/Staging/Production environments
- ✅ **pi Integration** - AI-assisted development workflow
- ✅ **Linear Integration** - Project management connected to code
- ✅ **Development Tools** - Makefile, configurations, templates
- ✅ **Architecture Documentation** - Complete system design
- ✅ **Team Onboarding** - Step-by-step guides

## 🛠️ Development Setup

```bash
# Install dependencies
make dev

# Run tests
make test

# Format code
make format

# All checks (lint + type + test)
make check

# Run application
make run-dev
```

See `QUICK_START.md` for more commands.

## 📊 Workflow Overview

```
Linear Issue → pi Analysis → Feature Branch → 
Development → Tests → PR → Code Review → Merge → 
Auto Deploy → Staging → Production
```

Full workflow details in `WORKFLOW_PLAN.md`.

## 🎯 Key Features

### Automated CI/CD Pipeline
- Linting (pylint, flake8)
- Testing (pytest with coverage)
- Type checking (mypy)
- Security scanning (bandit)
- Docker image building

### Multi-Environment Deployment
- **dev**: Auto-deploy on `develop` branch
- **staging**: Auto-deploy on `staging` branch
- **production**: Manual approval required

### AI-Assisted Development
- Issue analysis with `pi analyze-issue`
- Code scaffolding with `pi scaffold-feature`
- Code suggestions with `pi assist`
- PR generation with `pi generate-pr-summary`

### Linear Integration
- Issues linked to git branches & commits
- Automatic status updates
- Pull request tracking
- Deployment notifications

## 📁 Repository Structure

```
cpmx/
├── src/                    # Application source code
├── tests/                  # Test suite
├── .github/workflows/      # CI/CD pipelines
├── infrastructure/         # IaC (Terraform, Kubernetes)
├── docs/                   # Additional documentation
├── Makefile                # Development commands
├── pyproject.toml         # Python project config
├── .pi-config.yaml        # pi agent configuration
├── WORKFLOW_PLAN.md       # Complete workflow guide
├── QUICK_START.md         # Developer quick start
├── ARCHITECTURE.md        # Technical architecture
└── SETUP_INDEX.md         # Documentation index
```

## 🚀 First Issue Workflow

1. Pick issue from Linear (e.g., CPMX-42)
2. Analyze with pi: `pi analyze-issue --issue-id CPMX-42`
3. Create branch: `git checkout -b feat/CPMX-42-description`
4. Scaffold: `pi scaffold-feature --issue-id CPMX-42`
5. Implement with pi: `pi assist --file src/services/`
6. Test: `make test`
7. Commit: `git commit -m "feat: Description (#CPMX-42)"`
8. Push & create PR: `git push origin feat/CPMX-42-description`
9. Merge after approval
10. Auto-deploy to dev environment! 🎉

See `QUICK_START.md` for detailed instructions.

## 📚 Documentation

| Document | Purpose | For Whom |
|----------|---------|----------|
| **SETUP_INDEX.md** | Navigation guide for all docs | Everyone |
| **QUICK_START.md** | 5-minute setup & common commands | Developers |
| **WORKFLOW_PLAN.md** | Complete development workflow | Everyone |
| **ARCHITECTURE.md** | Technical deep-dive | Tech leads, DevOps |
| **pyproject.toml** | Python dependencies & config | Developers |
| **.pi-config.yaml** | pi agent configuration | AI-assisted dev |

## 🔧 Technology Stack

### Backend
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **Cache**: Redis
- **Task Queue**: Celery
- **ORM**: SQLAlchemy

### DevOps
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **IaC**: Terraform
- **CI/CD**: GitHub Actions
- **Cloud**: AWS/Azure/GCP (your choice)

### Development
- **Language**: Python 3.12+
- **Testing**: pytest
- **Linting**: pylint, flake8
- **Formatting**: black, isort
- **Type Checking**: mypy
- **AI Assistance**: pi

## 📈 Development Metrics (Goals)

- **Deployment Frequency**: 2-4 per day
- **Lead Time**: < 1 day
- **Test Coverage**: > 80%
- **Code Review Cycle**: < 1 hour
- **MTTR**: < 30 minutes

See `WORKFLOW_PLAN.md` section 13 for details.

## 🆘 Troubleshooting

**Problem**: Dependencies not installed
```bash
make dev
```

**Problem**: Tests failing locally
```bash
make test
```

**Problem**: Code formatting issues
```bash
make format
```

**Problem**: Type checking errors
```bash
make type-check
```

More issues? Check `QUICK_START.md` troubleshooting section.

## 🤝 Contributing

1. Pick an issue from Linear
2. Follow workflow in `QUICK_START.md`
3. Submit PR with issue reference
4. Wait for approval and merge
5. Watch it deploy automatically! 🚀

## 📞 Support

- **Workflow questions**: See `WORKFLOW_PLAN.md`
- **Technical questions**: See `ARCHITECTURE.md`
- **Quick how-tos**: See `QUICK_START.md`
- **Setup help**: See `SETUP_INDEX.md`

## 📄 License

MIT License - See LICENSE file

---

**Ready to start?** → Jump to [SETUP_INDEX.md](./SETUP_INDEX.md)

**Want full context?** → Read [WORKFLOW_PLAN.md](./WORKFLOW_PLAN.md)

**Just need commands?** → Check [QUICK_START.md](./QUICK_START.md)

---

*Last Updated: 2026-06-20*
