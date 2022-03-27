# Docker configuration to run tensorflow-gpu and jupyter with vim keybindings

  Combines the tensorflow-gpu-jupyter image with this jupyter extension:

  <https://github.com/lambdalisue/jupyter-vim-binding>

  Check out this repository into any project folder with
  ```
  git clone https://github.com/conradfriedrich/docker-tensorflow-gpu-jupyter-vim
  ```

  Then
  ```
  cd docker-tensorflow-gpu-jupyter-vim
  docker-compose up
  ```

  Installation steps for docker
  ```
  sudo pacman -Syu docker docker-compose
  systemctl start docker
  sudo groupadd docker
  sudo usermod -aG docker $USER
  ```
