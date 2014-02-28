// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'quality-gate/models/quality-gate', 'quality-gate/views/quality-gate-detail-view', 'quality-gate/views/quality-gate-detail-header-view', 'quality-gate/views/quality-gate-new-view'], function(Backbone, QualityGate, QualityGateDetailView, QualityGateDetailHeaderView, QualityGateNewView) {
    var QualityGateRouter, _ref;
    return QualityGateRouter = (function(_super) {
      __extends(QualityGateRouter, _super);

      function QualityGateRouter() {
        _ref = QualityGateRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QualityGateRouter.prototype.routes = {
        'show/:id': 'show'
      };

      QualityGateRouter.prototype.initialize = function(options) {
        return this.app = options.app;
      };

      QualityGateRouter.prototype.show = function(id) {
        var qualityGate, qualityGateDetailHeaderView, qualityGateDetailView;
        qualityGate = this.app.qualityGates.get(id);
        if (qualityGate) {
          this.app.qualityGateSidebarListView.highlight(id);
          qualityGateDetailHeaderView = new QualityGateDetailHeaderView({
            app: this.app,
            model: qualityGate
          });
          this.app.headerRegion.show(qualityGateDetailHeaderView);
          qualityGateDetailView = new QualityGateDetailView({
            app: this.app,
            model: qualityGate
          });
          this.app.detailsRegion.show(qualityGateDetailView);
          qualityGateDetailView.$el.hide();
          qualityGateDetailHeaderView.showSpinner();
          return qualityGate.fetch().done(function() {
            qualityGateDetailView.$el.show();
            return qualityGateDetailHeaderView.hideSpinner();
          });
        }
      };

      return QualityGateRouter;

    })(Backbone.Router);
  });

}).call(this);
