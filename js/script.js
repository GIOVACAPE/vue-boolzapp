console.log('Vue ok', Vue);

const app = Vue.createApp({
    data(){
      return{
          currentIndex: 0,
          serchChat: '',
          newMessage: '',
          data: {
            user: {
              name: 'Giova Cape',
              avatar: '_7'
            },
            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_6',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
              ]
            }
        }
    },

     computed: {
      filteredMethods() {
        return this.data.contacts.map(person => {
          person.visible = this.isVisible(person)
          return person;
       });
      }
    },

    methods: {
      changeChat(index) {
        this.currentIndex = index;
      },
      sendMessage() {
        if(!this.newMessage) return;

        this.data.contacts[this.currentIndex].messages.push({
          date: '10/01/2020 15:50:0',
          text: this.newMessage,
          status: 'sent'
        });
        this.newMessage= '';
        setTimeout(() => {
          this.data.contacts[this.currentIndex].messages.push({ 
            date: '10/01/2020 15:50:0',
            text: 'Ciao Giovacape!', 
          status: 'received'});
        }, 1000);
      },
      isVisible(person) {
        return person.name.toLowerCase().includes(this.serchChat.toLowerCase());
      },
      
      // PER MILESTONE 4 ----------------------

      // nameSearch() {

      //   for (  i = 0; i < this.contacts.length ; i++) {
      //     let position = this.contacts[i].name.toLowerCase();
      //     let searchResult = position.search(this.searchChat);

      //     if (searchResult != 0) {
      //       this.contacts[i].visible = false
      //     }
      //     else{
      //       this.contacts[i].visible = true
      //     }
      //   }
      //   this.searchChat = ''

      // },

    }
});

app.mount('#root');