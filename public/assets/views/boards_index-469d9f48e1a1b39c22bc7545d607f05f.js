TrelloClone.Views.BoardsIndex=Backbone.View.extend({events:{"click .new-board":"renderBoardForm","submit .board-form":"renderButton"},template:JST["boards/boards_index"],formTemplate:JST["boards/boards_form"],initialize:function(){this.boards=this.collection,this.listenTo(this.collection,"sync",this.render)},boardForm:function(){},render:function(){var e=this.template({boards:this.collection});return this.$el.html(e),this.boards.each(function(e){var r=new TrelloClone.Views.BoardsIndexItem({model:e});this.$(".boards-list").append(r.render().$el)}.bind(this)),this},renderBoardForm:function(){var e=this.formTemplate();return this.$(".form-area").html(e),this.$(".new-board").css("display","none"),this},renderButton:function(e){e.preventDefault();var r=$(e.currentTarget).serializeJSON().board,t=new TrelloClone.Models.Board;t.save(r,{wait:!0,success:function(){this.boards.add(t)}.bind(this)})}});