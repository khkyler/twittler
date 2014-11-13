var timeDiff = function(tweetTime){
              var time = Date.now() - tweetTime;
              var seconds = Math.floor(time / 1000);
              var mins = Math.floor(seconds / 60);
              var hours = Math.floor(mins / 60);
              var days = Math.floor(hours / 24);
              if (days > 0){
                return days + 'd' + hours + 'h'
              }else if (hours > 0){
                return hours + 'h'
              }else if (mins > 0){
                return mins + 'm'
              } else {
                return seconds + 's'
              }
            };