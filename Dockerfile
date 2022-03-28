#FROM tensorflow/tensorflow:latest-gpu-jupyter
FROM tensorflow/tensorflow:latest-jupyter
RUN mkdir -p $(jupyter --data-dir)/nbextensions \
    && cd $(jupyter --data-dir)/nbextensions \
    && git clone https://github.com/lambdalisue/jupyter-vim-binding vim_binding \
    && jupyter nbextension enable vim_binding/vim_binding \
    && COPY jupyter_vim_custom.js ~/.jupyter/custom/custom.js \
