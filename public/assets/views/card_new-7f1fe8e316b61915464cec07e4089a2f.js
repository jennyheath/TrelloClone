TrelloClone.Views.CardNewView=Backbone.View.extend({template:JST["cards/card_form"],events:{"submit form":"submit"},render:function(){var e=this.template();return this.$el.html(e),this},submit:function(e){e.preventDefault();var r=$(e.currentTarget).serializeJSON(),t=r.card,i=this.model.cards();r.card.list_id=this.model.id;var s=this,a=new TrelloClone.Models.Card;a.save(t,{success:function(){i.add(a,{trigger:!0}),s.render()}})}});